
// @ts-nocheck
import { useMemo, Fragment } from 'react';
import { ListItemBase, ListItemBaseSection, ListNext, PopoverNext, Text } from '@momentum-ui/react-collaboration';

function isLightColor(H: string) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length === 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length === 7 || H.length === 9) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta === 0) { h = 0; }
    else if (cmax === r) { h = ((g - b) / delta) % 6; }
    else if (cmax === g) { h = (b - r) / delta + 2; }
    else { h = (r - g) / delta + 4; }

    h = Math.round(h * 60);

    if (h < 0) { h += 360; }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return l > 50;
}

/**
 * Generates tables and groups them by first path keys or token type
 *
 * @param jsonData - json data with core tokens
 * @param tokenType - color or spacing etc,
 * @returns
 */
function generateJSXTable(jsonData: any, displayNameType: any, query: string) {
    // Create an array to hold the JSX tables
    const items: Array<React.ReactNode> = [];
    /**
     * Helper function to recursively generate tables for the subgroups and tokens
     * @param data - json data
     * @param path - initial path
     */
    function generateItems(data: any, path: any) {
        const keys = Object.keys(data);

        // Loop through the keys and create a table row for each subgroup or token
        keys.forEach((key) => {
            const item = data[key];

            // If the item is a subgroup, recursively generate tables for its contents
            if (typeof item === 'object' && !item.isSource) {
                generateItems(item, path.concat([key]));
            }

            // If the item is a token and its `isSource` property is set to `true`, create a table row
            if (item.isSource) {
                const joinedItemPath = item.path.join('-').toLowerCase();
                const jsx = (
                    <PopoverNext interactive triggerComponent={
                        <ListItemBase className="listItem" style={{ backgroundColor: item.value, color: isLightColor(item.value) ? 'black' : 'white' }}>
                            <ListItemBaseSection position='start'>
                                <Text type="body-secondary">{displayNameType === 'name' ? joinedItemPath : `--${item.name}`}</Text>
                            </ListItemBaseSection>
                            <ListItemBaseSection position='end'>
                                <Text type="body-secondary">{item.value}</Text>
                            </ListItemBaseSection>
                        </ListItemBase>}
                    >
                        <div style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                <Text type="body-primary"><b>Name</b></Text>
                                <code>{joinedItemPath}</code>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                <Text type="body-primary"><b>Color Value</b></Text>
                                <code>{item.value}</code>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                <Text type="body-primary"><b>CSS Variable</b></Text>
                                <code>--{item.name}</code>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text type="body-primary"><b>Description</b></Text>
                                <code>{item.description || 'No description set.'}</code>
                            </div>
                        </div>
                    </PopoverNext>
                );
                if (!query || query === '' || joinedItemPath.includes(query.toLowerCase()) || item.description?.toLowerCase().includes(query.toLowerCase())) {
                    items.push(jsx);
                }
            }
        });
    }

    generateItems(jsonData, []);
    return items;
}

export const TokenTable = ({ tokens, displayNameType, query }: { tokens: any, displayNameType: any, query: string }) => {
    const data = useMemo(() => generateJSXTable(tokens, displayNameType, query), [tokens, displayNameType, query]);
    return (
        <div style={{ overflowY: 'auto', overflowX: 'hidden', marginTop: '1rem', marginBottom: '1rem' }}>
            <ListNext listSize={data.length}>
                {data.map((value, index) => (<Fragment key={index}>{value}</Fragment>))}
            </ListNext>
        </div>
    );
};

import { ButtonCircle, PopoverNext, Text } from "@momentum-ui/react-collaboration";
import { Player } from "@lottiefiles/react-lottie-player";
import './Browser.css';
import { useFetch } from "../hooks/useCustomFetch";

const cleanPath = (path: string) => {
    let newPath = path;
    // delete all leading dots:
    while (newPath.charAt(0) === '.') {
        newPath = newPath.substring(1);
    }
    return newPath;
};

export const AssetCard = ({ text, repoPath, cardSize, typeofAsset, packageName }: any) => {
    const resizeImg = ['illustrations', 'brand-visuals'].includes(typeofAsset);

    const cleanedRepoPath = cleanPath(repoPath);
    const fullRepoPath = `${packageName}/dist${cleanedRepoPath}`;

    const { data, isPending } = useFetch(`https://unpkg.com/${fullRepoPath}`, typeofAsset === "animations" ? 'json' : 'text');

    const triggerComponent = (
        <ButtonCircle size={cardSize} ghost>
            {!isPending ? (
                typeofAsset === "animations" ?
                    <Player autoplay loop src={data as unknown as string} style={{ height: '90%', width: '90%' }}></Player>
                    :
                    <div
                        className="asset"
                        dangerouslySetInnerHTML={{ __html: data as unknown as string }}
                        style={{
                            height: resizeImg ? '90%' : 'none',
                            width: resizeImg ? '90%' : 'none',
                        }}
                    />
            ) : <p>...</p>}
        </ButtonCircle>
    );

    return (<>
        {(
            <div className="cardWrapper">
                <PopoverNext triggerComponent={triggerComponent} trigger="click" placement="auto" interactive>
                    <div className="popoverContent">
                        <div className="popoverEntry">
                            <Text type="body-secondary" className="popoverEntryLabel">Name:</Text>
                            <Text type="body-secondary" className="popoverEntryValue">{text}</Text>
                        </div>
                        <div className="popoverEntry">
                            <Text type="body-secondary" className="popoverEntryLabel">Path:</Text>
                            <Text type="body-secondary" className="popoverEntryValue">{fullRepoPath}</Text>
                        </div>
                    </div>
                </PopoverNext>
            </div>
        )}
    </>
    );
};

import { ButtonCircle, PopoverNext, Text } from "@momentum-ui/react-collaboration";
import { Player } from "@lottiefiles/react-lottie-player";
import './Browser.css';

const cleanPath = (path: string) => {
    let newPath = path;
    // delete all leading dots:
    while (newPath.charAt(0) === '.') {
        newPath = newPath.substring(1);
    }
    return newPath;
};

export const AssetCard = ({ text, path, repoPath, cardSize, typeofAsset, packageName }: any) => {
    const resizeImg = ['illustrations', 'brand-visuals'].includes(typeofAsset);

    const triggerComponent = (
        <ButtonCircle size={cardSize} ghost>
            {typeofAsset === "animations" ?
                <Player autoplay loop src={path} style={{ height: '90%', width: '90%' }}></Player> :
                <img
                    className="asset"
                    src={path}
                    style={{
                        height: resizeImg ? '90%' : 'none',
                        width: resizeImg ? '90%' : 'none',
                        filter: path.includes('colored') ? 'none' : 'invert(1)'
                    }} />
            }
        </ButtonCircle>
    );

    const cleanedRepoPath = cleanPath(repoPath);

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
                            <Text type="body-secondary" className="popoverEntryValue">{packageName}/dist{cleanedRepoPath}</Text>
                        </div>
                    </div>
                </PopoverNext>
            </div>
        )}
    </>
    );
};

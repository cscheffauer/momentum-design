import { ButtonCircle } from "@momentum-ui/react-collaboration";
import './Browser.css';

export const AssetCard = ({ path, cardSize }: any) => {
    return (<>
        {(
            <div className="cardWrapper">
                {/* @ts-ignore: next-line */}
                <ButtonCircle size={cardSize} ghost>
                    <img className="asset" src={path} style={{ filter: path.includes('colored') ? 'none' : 'invert(1)' }} />
                </ButtonCircle>
            </div>
        )}
    </>
    );
};

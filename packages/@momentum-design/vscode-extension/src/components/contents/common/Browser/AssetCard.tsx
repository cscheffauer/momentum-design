import { ButtonCircle } from "@momentum-ui/react-collaboration";

export const AssetCard = ({ children }: any) => {

    return (
        <div className="cardWrapper">
            <ButtonCircle size={52} ghost>{children}</ButtonCircle>
        </div>
    );
};

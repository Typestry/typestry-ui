import { FC } from '../../react';

type ChangeReason = "next" | "prev";
export interface ImageDialogProps {
    imgSrc: string;
    isOpen: boolean;
    onClose: () => void;
    onChange?: ({ reason }: {
        reason: ChangeReason;
    }) => void;
}
export declare const ImageDialog: FC<ImageDialogProps>;
export default ImageDialog;

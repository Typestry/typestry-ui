import { FC } from 'react';

export interface ImageDialogProps {
    imgSrc: string;
    isOpen: boolean;
    onClose: () => void;
    onChange?: ({ reason }: {
        reason: "next" | "prev";
    }) => void;
}
export declare const ImageDialog: FC<ImageDialogProps>;
export default ImageDialog;

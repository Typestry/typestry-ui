import { ComponentPropsWithoutRef, FC } from '../../react';

export interface GalleryProps {
    images: Array<string>;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
        image?: ComponentPropsWithoutRef<"img">;
    };
}
declare const Gallery: FC<GalleryProps>;
export default Gallery;

import { BaseButtonProps, Scale, variants } from "../Button/types";
export interface SwapButtonMenuItemProps extends BaseButtonProps {
    isActive?: boolean;
}
export interface SwapButtonMenuProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    scale?: Scale;
    children: React.ReactElement[];
}

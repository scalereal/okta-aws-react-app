export interface Props {
    activeSideBarPath?: string;
    defaultOpen?: boolean;
    handlePathChange?: (page: string) => void;
}

export interface SideBarMenuConf {
    path: string;
    icon: JSX.Element;
}

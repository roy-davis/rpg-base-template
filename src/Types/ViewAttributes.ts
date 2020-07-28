
export interface ViewInterface {
    updateUI: (attributes: ViewAttributes) => void,
};

export type ViewAttributes = {
    title: string;
    prototype?: boolean;
    suppressMenu?: boolean;
}
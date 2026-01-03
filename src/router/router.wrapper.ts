
export interface RouterWrapper {
    navigate(path: string): void;
    getParamValue(paramName: string): string | undefined
}


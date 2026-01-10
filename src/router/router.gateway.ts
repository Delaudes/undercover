
export interface RouterGateway {
    navigate(path: string): void;
    getParamValue(paramName: string): string | undefined
}


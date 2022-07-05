export class TypeGuardError extends Error {
    public readonly method: string;
    public readonly path: string | undefined;
    public readonly expected: string;
    public readonly value: any;

    public constructor(props: TypeGuardError.IProps) {
        // MESSAGE CONSTRUCTION
        super(
            props.message ||
                `Error on TSON.${props.method}(): invalid type${
                    props.path ? ` on ${props.path}` : ""
                }, expect to be ${props.expected}`,
        );

        // INHERITANCE POLYFILL
        const proto = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
        else (this as any).__proto__ = proto;

        // ASSIGN MEMBERS
        this.method = props.method;
        this.path = props.path;
        this.expected = props.expected;
    }
}
export namespace TypeGuardError {
    export interface IProps {
        method: string;
        path?: string;
        expected: string;
        value: any;
        message?: string;
    }
}
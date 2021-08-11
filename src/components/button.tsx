type ButtonProps = {
    children?: string;
}

export function Button(prop: ButtonProps) {
    return (
        <button> {prop.children || 'Default'} </button>
    )
}
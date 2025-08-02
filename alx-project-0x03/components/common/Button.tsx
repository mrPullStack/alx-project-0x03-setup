interface ButtonProps {
    action: () => void;
    buttonLabel: string;
    buttonBackgroundColor?: string;
    }

    export default function Button({ action, buttonLabel, buttonBackgroundColor = "blue" }: ButtonProps) {
    return (
        <button
        onClick={action}
        className={`px-4 py-2 text-white bg-${buttonBackgroundColor}-500 rounded`}
        >
        {buttonLabel}
        </button>
    );
}

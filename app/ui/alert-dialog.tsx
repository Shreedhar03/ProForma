import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ReactNode, useCallback } from "react"

interface AlertDialogBoxProps {
    text: string;
    triggerBtn: ReactNode;
    actionBtn: string;
    onConfirm: () => void; // Callback function for confirmation
}

export default function AlertDialogBox({ text, triggerBtn, actionBtn, onConfirm }: AlertDialogBoxProps) {
    const handleConfirm = useCallback(() => {
        // Call the callback function when the action button is clicked
        onConfirm();
    }, [onConfirm]);
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {triggerBtn}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-base text-destructive font-semibold">
                        {text}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit" onClick={handleConfirm}>
                        {actionBtn}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

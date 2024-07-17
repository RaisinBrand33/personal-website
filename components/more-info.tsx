import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function MoreInfo(){
    return(
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="hover:bg-gradient-to-r hover:from-nasa-cyan hover:to-nasa-orange">More Info</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
                Anyone who has this link will be able to view this.
            </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
            </div>
            </div>
            <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
                <Button type="button" variant="mine">
                Close
                </Button>
            </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}
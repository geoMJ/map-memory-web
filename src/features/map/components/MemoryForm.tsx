import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MonthYearSelect from "@/components/common/MonthYearSelect";

const MemoryForm = () => {

    const logvals = (y:string, m?:string) => {
        console.log(y+m)
    };

    return (
        <form className="space-y-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter title" />
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter description" />
            </div>
            <div>
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" accept="image/*" />
            </div>
            <MonthYearSelect onSelectChange={logvals} />
            <Button type="submit" className="w-full">
                Submit
            </Button>
        </form>
    );
};

export default MemoryForm;

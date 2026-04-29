import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { usePassengerStore } from "@/store/usePassengerStore";

export default function PassengerDetailsForm() {
  const { passengers, updatePassenger, removePassenger, addPassenger } = usePassengerStore();

  return (
    <ComponentCard childClassName="space-y-1 " title="Passenger Details">
      <div className="space-y-3">
        {passengers.map((item, index) => (
          <div className="grid grid-cols-2 gap-2" key={index}>
            <div className="xl:col-span-1 ">
              <div>
                <Label>Passenger -{index + 1}</Label>
                <Input
                  placeholder="Enter passenger name"
                  value={item.name}
                  onChange={(e) => updatePassenger(item.id, { name: e.target.value })}
                />
              </div>
            </div>
            <div className="xl:col-span-1 flex items-end gap-2">
              <div>
                <Label>Ticket Number</Label>
                <Input
                  placeholder="Enter ticket number"
                  value={item.ticketNo}
                  onChange={(e) => updatePassenger(item.id, { ticketNo: e.target.value })}
                />
              </div>
              <Button onClick={() => removePassenger(item.id)}>-</Button>
            </div>
          </div>
        ))}
        <div className="flex items-end  justify-end">
          <Button onClick={addPassenger}>+</Button>
        </div>
      </div>
    </ComponentCard>
  );
}

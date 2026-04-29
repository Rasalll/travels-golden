import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
// import { usePaymentStore } from "@/store/usePaymentStore";

export default function PaymentForm() {
  // const { payments, updatePayment, removePayment, addPayment } = usePaymentStore();

  return (
    <ComponentCard childClassName="space-y-1 " title="Payment Details">
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="xl:col-span-1 ">
            <div>
              <Label>Amount</Label>
              <Input
                placeholder="Enter Amount"
                // value={payments.amount}
                // onChange={(e) => updatePayment(item.id, { amount: e.target.value })}
              />
            </div>
          </div>
          <div className="xl:col-span-1">
            <div>
              <Label>To</Label>
              <Input
                placeholder="Enter to"
                // value={item.to}
                // onChange={(e) => updateFlight(item.id, { to: e.target.value })}
              />
            </div>
          </div>
          <div className="xl:col-span-1">
            <div>
              <Label>Duration</Label>
              <Input
                placeholder="Enter Duration"
                // value={item.duration}
                // onChange={(e) => updateFlight(item.id, { duration: e.target.value })}
              />
            </div>
          </div>
          <div className="xl:col-span-1 ">
            <div>
              <Label>Flight Number</Label>
              <Input
                placeholder="Enter Flight Number"
                // value={item.flightNumber}
                // onChange={(e) => updateFlight(item.id, { flightNumber: e.target.value })}
              />
            </div>
          </div>
          <div className="xl:col-span-1">
            <div>
              <Label>Departure Date</Label>
              <Input
                placeholder="Enter departure date"
                // value={item.departure.date}
                // onChange={(e) =>
                //   updateFlight(item.id, {
                //     departure: { ...item.departure, date: e.target.value },
                //   })
                // }
              />
            </div>
          </div>
          <div className="xl:col-span-1 flex items-end gap-2">
            <div>
              <Label>Departure Time</Label>
              <Input
                placeholder="Enter departure time"
                // value={item.departure.time}
                // onChange={(e) =>
                //   updateFlight(item.id, {
                //     departure: { ...item.departure, time: e.target.value },
                //   })
                // }
              />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}

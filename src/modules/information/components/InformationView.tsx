import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import { important_information } from "@/constants/data";

const InformationView = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Important Information" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start ">
        <ComponentCard className="relative">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-7 2xl:gap-x-32">
            {important_information.map((item, index) => (
              <div key={index}>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {index + 1}. {item}
                </p>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default InformationView;

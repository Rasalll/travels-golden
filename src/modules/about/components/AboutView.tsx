import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { about } from "@/constants/data";

const AboutView = () => {
  const fields = [
    { label: "Name", value: about.title },
    { label: "Address", value: about.address },
    { label: "Email", value: about.email },
    { label: "Phone", value: about.phone },
    { label: "Image", value: about.image },
  ];
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="About Us" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start ">
        <ComponentCard className="relative">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            {fields.map((item, index) =>
              item.label === "Image" ? (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={item.value}
                        className="h-full w-full object-cover"
                        alt={item.label}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-sm text-gray-800 dark:text-white/90">{item.value}</p>
                </div>
              ),
            )}
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default AboutView;

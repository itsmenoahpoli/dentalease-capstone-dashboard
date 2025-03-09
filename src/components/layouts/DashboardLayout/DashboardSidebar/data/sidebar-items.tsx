export const SIDEBAR_ITEMS = [
  {
    group: "Manage",
    children: [
      {
        label: "Services",
        url: "",
      },
      {
        label: "Appointments",
        url: "",
      },
      {
        label: "Patient Records",
        url: "",
      },
      {
        label: "Prescriptions (Digital)",
        url: "",
      },
      {
        label: "Billings & Payments",
        url: "",
        children: [
          {
            label: "Digital Billing Solutions",
            url: "",
          },
          {
            label: "Payment Collections",
            url: "",
          },
          {
            label: "Generate Invoices & Receipts",
            url: "",
          },
          {
            label: "Track Payment Status",
            url: "",
          },
        ],
      },
      {
        label: "Inventory",
        url: "",
        children: [
          {
            label: "Inventory Tracking",
            url: "",
          },
          {
            label: "Supply Re-stocking",
            url: "",
          },
        ],
      },
      {
        label: "CMS",
        url: "",
      },
    ],
  },
] as const;

import { format } from "date-fns";

export const FORMATTERS = {
  slugifyString(value: string) {
    if (!value) return "";

    return value.toLowerCase().trim().replaceAll(" ", "-");
  },

  getInitials(value?: string) {
    if (!value) return "";
    if (value.trim().length === 0) return value.charAt(0);

    return value
      .trim()
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase())
      .join("");
  },

  getCurrentDate(valueFormat: string = "MMMM dd, yyyy") {
    return format(new Date(), valueFormat);
  },

  getCurrentTime(valueFormat: string = "HH:mm:ss a") {
    return format(new Date(), valueFormat);
  },

  getCurrentDatetime(valueFormat: string = "MMMM dd, yyyy HH:mm:ss a") {
    return format(new Date(), valueFormat);
  },

  formateDatetime(value: string, type: "date" | "datetime" = "date") {
    const valueFormat: string = type === "date" ? "MMMM dd, yyyy" : "MMMM dd, yyyy hh:mm:ss a";

    return format(new Date(value), valueFormat);
  },
} as const;

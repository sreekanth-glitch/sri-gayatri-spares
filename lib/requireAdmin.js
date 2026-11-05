import { cookies } from "next/headers";
import { isValidSession } from "@/lib/auth";

export function requireAdmin() {
  const token = cookies().get("sg_admin")?.value;
  return isValidSession(token);
}

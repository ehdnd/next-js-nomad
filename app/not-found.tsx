import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <Navigation></Navigation>
      <h1>Not Found!</h1>
    </div>
  );
}

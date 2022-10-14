import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/TextInput/TextInput";
import { Logo } from "./Logo";
import { Envelope, Lock } from "phosphor-react";
import "./styles/global.css";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";
import { SignIn } from "./pages/SignIn/SignIn";

export function App() {
  return (
    <SignIn />
  );
}

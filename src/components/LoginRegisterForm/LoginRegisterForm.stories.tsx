import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginRegisterForm from ".";

const meta: Meta<typeof LoginRegisterForm> = {
  component: LoginRegisterForm,
  title: "component/LoginRegisterForm",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof LoginRegisterForm>;

export const Basic: Story = {
  render: () => <LoginRegisterForm/>
};
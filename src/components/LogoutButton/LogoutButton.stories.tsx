import type { Meta, StoryObj } from "@storybook/react-vite";
import LogoutButton from ".";

const meta: Meta<typeof LogoutButton> = {
  component: LogoutButton,
  title: "component/LogoutButton",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Base: Story = {
  render: () => <LogoutButton handleLogout={() => {}}/>
};

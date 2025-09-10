import type { Meta, StoryObj } from "@storybook/react-vite";
import Description from ".";

const meta: Meta<typeof Description> = {
  component: Description,
  title: "component/Form/Description",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Basic: Story = {
  render: () => <Description description="description" required={true}/>
};

export const DescriptionOnly: Story = {
  render: () => <Description description="description"/>
};

export const RequiredOnly: Story = {
  render: () => <Description required={true}/>
};
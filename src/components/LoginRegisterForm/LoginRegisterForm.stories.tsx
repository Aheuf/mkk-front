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
  render: () =>
    <div style={{backgroundColor:"#212121", padding:20}}>
      <LoginRegisterForm connectPlayer={() => {}} registerPlayer={() => {}} isPlayersFull={false}/>
    </div>
};

export const WithFullPlayers: Story = {
  render: () =>
    <div style={{backgroundColor:"#212121", padding:20}}>
      <LoginRegisterForm connectPlayer={() => {}} registerPlayer={() => {}} isPlayersFull={true}/>
    </div>
};
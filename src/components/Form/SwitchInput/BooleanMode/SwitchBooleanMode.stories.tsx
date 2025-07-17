import type { Meta, StoryObj } from "@storybook/react-vite";
import SwitchInput from "..";
import { SWITCH_MODE, SWITCH_VARIANT } from "../Switch.constants";

const meta: Meta<typeof SwitchInput> = {
  component: SwitchInput,
  title: "component/Form/InputSwitch/BooleanMode",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchInput>;

export const Basic: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaulOff: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      defaultValue={false}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaultB: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      defaultValue={true}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDescription: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      description="description de l'input"
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithRequired: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      required={true}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDescriptionAndRequired: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      description="description de l'input"
      required={true}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithIcons: Story = {
  render: () => (
    <SwitchInput
      mode={SWITCH_MODE.BOOLEAN}
      icons={["account_circle","person_edit"]}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <div className="flex">
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.AMBER}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.BLUE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.CYAN}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.EMERALD}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.FUSHSIA}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.GRAY}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.GREEN}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.INDIGO}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.LIME}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.NEUTRAL}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.ORANGE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
      </div>
      <div className="flex">
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.PINK}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.PURPLE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.RED}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.ROSE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.SKY}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.SLATE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.STONE}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.TEAL}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.VIOLET}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.YELLOW}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
        <SwitchInput
          mode={SWITCH_MODE.BOOLEAN}
          className="m-1"
          variant={SWITCH_VARIANT.ZINC}
          onChange={(selectedValue) => console.log(selectedValue)}
        />
      </div>
    </>
  ),
};

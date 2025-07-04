import type { Meta, StoryObj } from "@storybook/react-vite";
import SwitchInput, { SWITCH_VARIANT } from ".";

const meta: Meta<typeof SwitchInput> = {
  component: SwitchInput,
  title: "component/InputSwitch",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SwitchInput>;

const stubedOptions: [string, string] = ["Option A", "Option B"];

export const Basic: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaultA: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      defaultValue={stubedOptions[0]}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaultB: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      defaultValue={stubedOptions[1]}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.AMBER}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.BLUE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.CYAN}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.EMERALD}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.FUSHSIA}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.GRAY}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.GREEN}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.INDIGO}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.LIME}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.NEUTRAL}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.ORANGE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.PINK}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.PURPLE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.RED}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.ROSE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.SKY}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.SLATE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.STONE}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.TEAL}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.VIOLET}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.YELLOW}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
            <SwitchInput
        options={["",""]}
        className="m-1"
        variant={SWITCH_VARIANT.ZINC}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
    </>
  ),
};
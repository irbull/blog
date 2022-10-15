import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function Container(props: Props) {
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex-auto min-w-0 max-w-5xl px-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export interface HeaderItemType {
  id: string;
  title: string;
}

export interface AnimatedWrapperType {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

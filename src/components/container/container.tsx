import RequiredChildrenProperties from "../common/required-children-properties";

/**
 * A container is a logical place to put page content. It will automatically add padding.
 */
export const Container: React.FC<RequiredChildrenProperties> = ({
  children,
}: RequiredChildrenProperties) => {
  return <div className="container">{children}</div>;
};

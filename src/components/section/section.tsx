import RequiredChildrenProperties from "../common/required-children-properties";

/**
 * A section acts like a section of a document.
 * It should be used as a way to hold something that could be a database record.
 */
export const Section: React.FC<RequiredChildrenProperties> = ({
  children,
}: RequiredChildrenProperties) => {
  return <section className="px-1 py-2">{children}</section>;
};

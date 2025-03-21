import dynamic from "next/dynamic";
import FallBackComponent from "@/components/ComponentMapper/FallBackComponent";

interface ComponentProps {
  component_handel: string;
}

interface ComponentMapperProps {
  components: ComponentProps[];
  content?: any;
  arabic?: boolean;
}

const ComponentMapper: React.FC<ComponentMapperProps> = ({
  components,
  content,
  arabic,
}) => {
  return (
    <>
      {components.map((component, index) => {
        const Component = dynamic(() =>
          import(`@/components/${component.component_handel}`)
            .then((mod) => mod.default)
            .catch(() => FallBackComponent)
        );

        return (
          <div key={index} className="component-wrapper">
            <Component
              content={content}
              arabic={arabic}
              {...(component as any)}
            />
          </div>
        );
      })}
    </>
  );
};

export default ComponentMapper;

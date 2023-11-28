import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TextWithTooltipProps {
  content: string;
  children: React.ReactNode;
  Icon?: JSX.Element;
}

const TextWithTooltip = ({ content, children, Icon }: TextWithTooltipProps) => {
  return (
    <>
      {Icon && Icon}
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="top" align="center" className="max-w-[300px]">
              <span>{content}</span>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TextWithTooltip;

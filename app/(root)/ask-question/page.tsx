import { FormContainer, InstructionsNotice } from '@/containers/ask-question/components';

const AskQuestionPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold">Ask a public question</h1>
      <InstructionsNotice />
      <FormContainer />
    </div>
  );
};

export default AskQuestionPage;

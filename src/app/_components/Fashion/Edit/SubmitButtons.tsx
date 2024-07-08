import { Button, Spinner } from "flowbite-react";

interface SubmitButtonsType {
  submitLoading: boolean;
  btnText: string;
  onCancel: () => void;
}

export default function SubmitButtons({
  submitLoading,
  btnText,
  onCancel,
}: SubmitButtonsType) {
  return (
    <div className="h-13 my-10 flex items-center justify-center gap-12">
      <Button
        className="h-full"
        onClick={onCancel}
        size="md"
        color="light"
        disabled={submitLoading}
      >
        <span className="text-xl">취 소</span>
      </Button>
      <Button
        className="h-full"
        color="success"
        disabled={submitLoading}
        type="submit"
      >
        {!submitLoading ? (
          <span className="text-xl">{btnText}</span>
        ) : (
          <span>
            <Spinner size="md" />
          </span>
        )}
      </Button>
    </div>
  );
}

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "@/hooks/useCreateWorkspace";

const WorkspaceForm = () => {
  const { errors, isPending, onFormSubmit, register } = useCreateWorkspace();
  return (
    <form onSubmit={onFormSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Workspace Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter workspace name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-400"
      >
        {isPending ? <Spinner /> : "Create Workspace"}
      </Button>
    </form>
  );
};

export default WorkspaceForm;

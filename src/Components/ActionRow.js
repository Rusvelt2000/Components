import Button from "./Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function ActionRow({ children, editAction, deleteAction }) {
  return (
    <div className="ActionRow">
      {children}
      {(editAction || deleteAction) && (
        <div className="action-block">
          {editAction && (
            <Button primary favicon outline>
              <CiEdit />
            </Button>
          )}
          {deleteAction && (
            <Button alert favicon outline onClick={deleteAction}>
              <MdDeleteOutline />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default ActionRow;

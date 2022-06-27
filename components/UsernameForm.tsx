import { useState, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import { firestore } from "../lib/firebase";
import Loader from "../components/Loader";

enum Status {
  Info = 1,
  Success,
  Error
}

export default function UsernameForm() {
  const [usernameValue, setUsernameValue] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const requestId = useRef(0);

  const handleChange = (evt) => {
    requestId.current++;
    const val = evt.target.value.toLowerCase();
    const re = /^[a-z0-9_]{3,15}$/;

    setStatus(null);
    setIsLoading(false);
    setUsernameValue(val);

    if (val.length < 3 || val.length > 15) {
      setStatus({
        type: Status.Info,
        message: "Username must be between 3 and 15 characters"
      });
      return;
    }

    if (!re.test(val)) {
      setStatus({
        type: Status.Info,
        message: "Username must only contain letters and numbers"
      });
      return;
    }

    checkUsername(val, requestId.current);
  };

  const checkUsername = useMemo(
    () =>
      debounce(async (username, reqId) => {
        setIsLoading(true);
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        setIsLoading(false);
        if (reqId === requestId.current) {
          if (exists) {
            setStatus({
              type: Status.Error,
              message: `${username} is taken`
            });
          } else {
            setStatus({
              type: Status.Success,
              message: `${username} is available`
            });
          }
        }
      }, 500),
    []
  );

  const renderMessage = (type, message) => {
    return (
      <div className={`input${Status[type]}`}>
        <img src={`/images/${Status[type].toLowerCase()}.svg`} alt="" />
        {message}
      </div>
    );
  };

  return (
    <section className="UsernameForm">
      <h2>Please choose a username</h2>
      <form>
        <div className="inputGroup">
          <input
            placeholder="e.g. cornbread32"
            value={usernameValue}
            onChange={handleChange}
          />
          <button
            disabled={!status || status?.type !== Status.Success}
            className="button buttonPrimary"
          >
            Confirm
          </button>
        </div>
        <div className="inputMessageContainer">
          {status ? (
            renderMessage(status.type, status.message)
          ) : isLoading ? (
            <div className="inputLoading">
              <Loader color="#009f3f" />
              Checking availability
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  );
}

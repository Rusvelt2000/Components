import { useReducer } from "react";
import Container from "../Components/Container";
import Section from "../Components/Section";
import Modal from "../Components/Modal";
import Button from "../Components/Button";
import Title from "../Components/Title";
import defaultThumb from "../Assets/Thumbs/defaultThumb.svg";

const OPEN_MODAL = "open-modal";
const OPEN_SMALL_MODAL = "open-small-modal";
const OPEN_LARGE_MODAL = "open-large-modal";
const OPEN_IMAGE_MODAL = "open-image-modal";
const CLOSE_MODAL = "close-modal";

function reducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case OPEN_SMALL_MODAL:
      return {
        ...state,
        isSmallOpen: true,
      };
    case OPEN_LARGE_MODAL:
      return {
        ...state,
        isLargeOpen: true,
      };
    case OPEN_IMAGE_MODAL:
      return {
        ...state,
        isImageOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        isSmallOpen: false,
        isLargeOpen: false,
        isImageOpen: false,
      };
    default:
      return state;
  }
}

function ModalPage() {
  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    isLargeOpen: false,
    isImageOpen: false,
  });
  const handleOpenModal = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };
  const handleOpenSmallModal = () => {
    dispatch({
      type: OPEN_SMALL_MODAL,
    });
  };
  const handleOpenLargeModal = () => {
    dispatch({
      type: OPEN_LARGE_MODAL,
    });
  };
  const handleOpenImageModal = () => {
    dispatch({
      type: OPEN_IMAGE_MODAL,
    });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <div>
      <Title>Modals</Title>
      <Section col3>
        <Container title="Regular Modal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos,
            laoreet lacus dictum dapibus morbi congue euismod turpis ac,
            vulputate donec ante facilisi volutpat nam leo. Sagittis est
            pellentesque magnis cubilia diam leo, donec odio scelerisque nam
            cursus, fusce tristique tempor massa nunc. Viverra scelerisque curae
            primis morbi penatibus ad curabitur rutrum magnis cum, enim nisi sed
            phasellus venenatis ridiculus mollis nascetur est, litora
            pellentesque pretium aliquam nisl praesent ante maecenas aliquet.
          </p>
          <Button primary outline onClick={handleOpenModal}>
            Open Regular Modal
          </Button>
        </Container>
        <Container title="Large Modal">
          <p>
            Congue quam himenaeos eros massa imperdiet diam hendrerit cum
            pharetra sollicitudin nisi sagittis orci, aliquet vitae nulla
            pellentesque mus placerat pretium primis sapien faucibus magna.
            Malesuada hendrerit sociosqu suscipit rhoncus dui eleifend pulvinar
            magnis mus a porta id neque, natoque fames scelerisque potenti
            cubilia interdum vehicula viverra eu vitae litora.
          </p>
          <p>
            Luctus accumsan gravida ultricies purus cum mi magna ultrices
            lacinia lobortis curae vivamus, mattis tincidunt nulla potenti
            habitant ac eget sociis nascetur dui conubia, senectus quam in
            placerat litora etiam erat quis turpis rutrum cras. Platea mauris
            sociis elementum dis fusce etiam blandit congue sagittis, primis
            bibendum suspendisse montes litora interdum maecenas mus. Nam
            pellentesque porta hendrerit ultrices fames sollicitudin aenean erat
            vulputate, pulvinar in neque himenaeos dapibus sociosqu donec
            tempor, viverra nostra facilisis aliquam natoque vivamus cubilia
            gravida. Pharetra quisque lacus euismod elementum enim eu nibh, erat
            faucibus sagittis tempor ullamcorper sodales libero nullam, viverra
            habitasse arcu vitae diam mauris. Condimentum tempor tristique
            dictum nunc malesuada vel lacus mollis, mauris nascetur magnis
            rutrum tincidunt dignissim varius aenean, posuere morbi pretium
            aptent netus facilisis bibendum.
          </p>
          <Button primary onClick={handleOpenLargeModal}>
            Open Large Modal
          </Button>
        </Container>
        <Container title="Modal with image">
          <p>
            Cum morbi ut massa purus vel turpis natoque sapien libero, per
            pretium felis egestas venenatis nam etiam convallis, pulvinar
            potenti eleifend nibh tincidunt hac facilisis dictum. Interdum
            imperdiet tristique vitae fermentum ullamcorper mollis hendrerit
            praesent fames est libero iaculis dignissim, a himenaeos faucibus
            pulvinar vestibulum tempor id posuere dis semper purus cras,
            habitasse primis molestie commodo venenatis senectus facilisi ante
            sagittis integer mattis potenti. Blandit mi nulla in erat aenean
            lacus duis vestibulum sagittis tincidunt, inceptos mollis suscipit
            ante fames a id taciti rutrum. Montes posuere magna tellus dictum
            facilisi nam pretium in, tincidunt auctor risus ornare sollicitudin
            imperdiet.
          </p>
          <Button primary outline onClick={handleOpenImageModal}>
            Open Image Modal
          </Button>
        </Container>
      </Section>
      <Section col2>
        <Container>
          <p>
            Purus vitae sagittis est neque lectus tortor pulvinar eu, lacinia ut
            blandit suscipit auctor praesent consequat non, ridiculus inceptos
            varius vel mi sociosqu nunc. Facilisis pretium quisque mus diam sem
            interdum rutrum leo felis, nibh imperdiet in dictumst non porttitor
            cum tortor laoreet, cras consequat malesuada taciti rhoncus orci
            auctor iaculis. Semper dis gravida turpis congue commodo faucibus
            sapien mi vehicula ridiculus porttitor, inceptos euismod penatibus
            litora viverra eu nisi erat vivamus natoque. Magnis aliquam
            elementum vehicula congue massa neque potenti, mi et tristique velit
            sem curae, sollicitudin nulla sagittis ultricies pulvinar tempor.
            Urna risus parturient felis cursus ullamcorper facilisis laoreet
            sed, nascetur ultricies aenean proin auctor montes eget cum,
            bibendum ante sollicitudin erat mi euismod suspendisse.
          </p>
          <Button primary onClick={handleOpenSmallModal}>
            Open Small Modal
          </Button>
        </Container>
        <Container>
          <p>
            Aenean tortor donec proin diam ligula feugiat porttitor fermentum,
            orci himenaeos volutpat commodo metus at sollicitudin nulla auctor,
            dapibus neque est dignissim gravida interdum aptent. Accumsan
            dignissim erat imperdiet felis quisque ridiculus enim mattis id
            aenean scelerisque malesuada placerat penatibus netus, leo fusce
            cras nulla maecenas potenti aptent consequat iaculis taciti nibh
            condimentum mauris. Vehicula tristique mauris vestibulum sapien id
            curae scelerisque natoque aenean, donec iaculis volutpat est
            torquent malesuada conubia rutrum eleifend, aliquam pellentesque
            lectus interdum enim dis fusce pretium.
          </p>
        </Container>

        {state.isOpen && (
          <Modal
            key={Math.random()}
            onClose={closeModal}
            title="Regular size modal"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              deleniti officiis quia eveniet ipsa fugit beatae, aliquid,
              nesciunt error consectetur sed nisi ratione. Laboriosam rem
              laborum quos repellat, consequatur quisquam.
            </p>
          </Modal>
        )}
        {state.isSmallOpen && (
          <Modal
            key={Math.random()}
            onClose={closeModal}
            modalSize="sm"
            title="Small size modal"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              deleniti officiis quia eveniet ipsa fugit beatae, aliquid,
              nesciunt error consectetur sed nisi ratione. Laboriosam rem
              laborum quos repellat, consequatur quisquam.
            </p>
          </Modal>
        )}
        {state.isLargeOpen && (
          <Modal
            key={Math.random()}
            onClose={closeModal}
            modalSize="lg"
            title="Large size modal"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              deleniti officiis quia eveniet ipsa fugit beatae, aliquid,
              nesciunt error consectetur sed nisi ratione. Laboriosam rem
              laborum quos repellat, consequatur quisquam.
            </p>
          </Modal>
        )}
        {state.isImageOpen && (
          <Modal
            key={Math.random()}
            onClose={closeModal}
            image={defaultThumb}
            title="Modal with image"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              deleniti officiis quia eveniet ipsa fugit beatae, aliquid,
              nesciunt error consectetur sed nisi ratione.
            </p>
            <p>Laboriosam rem laborum quos repellat, consequatur quisquam.</p>
          </Modal>
        )}
      </Section>
    </div>
  );
}

export default ModalPage;

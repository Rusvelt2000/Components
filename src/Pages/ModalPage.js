import { useState } from "react";

import Modal from "../Components/Modal";
import Button from "../Components/Button";
import Title from "../Components/Title";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Title>Modals</Title>
      <div className="fade-in-up">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos,
          laoreet lacus dictum dapibus morbi congue euismod turpis ac, vulputate
          donec ante facilisi volutpat nam leo. Sagittis est pellentesque magnis
          cubilia diam leo, donec odio scelerisque nam cursus, fusce tristique
          tempor massa nunc. Viverra scelerisque curae primis morbi penatibus ad
          curabitur rutrum magnis cum, enim nisi sed phasellus venenatis
          ridiculus mollis nascetur est, litora pellentesque pretium aliquam
          nisl praesent ante maecenas aliquet.
        </p>
        <Button primary outline onClick={handleOpenModal}>
          Open Modal
        </Button>
        <p>
          Congue quam himenaeos eros massa imperdiet diam hendrerit cum pharetra
          sollicitudin nisi sagittis orci, aliquet vitae nulla pellentesque mus
          placerat pretium primis sapien faucibus magna. Malesuada hendrerit
          sociosqu suscipit rhoncus dui eleifend pulvinar magnis mus a porta id
          neque, natoque fames scelerisque potenti cubilia interdum vehicula
          viverra eu vitae litora.
        </p>
        <p>
          Luctus accumsan gravida ultricies purus cum mi magna ultrices lacinia
          lobortis curae vivamus, mattis tincidunt nulla potenti habitant ac
          eget sociis nascetur dui conubia, senectus quam in placerat litora
          etiam erat quis turpis rutrum cras. Platea mauris sociis elementum dis
          fusce etiam blandit congue sagittis, primis bibendum suspendisse
          montes litora interdum maecenas mus. Nam pellentesque porta hendrerit
          ultrices fames sollicitudin aenean erat vulputate, pulvinar in neque
          himenaeos dapibus sociosqu donec tempor, viverra nostra facilisis
          aliquam natoque vivamus cubilia gravida. Pharetra quisque lacus
          euismod elementum enim eu nibh, erat faucibus sagittis tempor
          ullamcorper sodales libero nullam, viverra habitasse arcu vitae diam
          mauris. Condimentum tempor tristique dictum nunc malesuada vel lacus
          mollis, mauris nascetur magnis rutrum tincidunt dignissim varius
          aenean, posuere morbi pretium aptent netus facilisis bibendum.
        </p>
        <Button primary outline onClick={handleOpenModal}>
          Open Modal
        </Button>
        <p>
          Cum morbi ut massa purus vel turpis natoque sapien libero, per pretium
          felis egestas venenatis nam etiam convallis, pulvinar potenti eleifend
          nibh tincidunt hac facilisis dictum. Interdum imperdiet tristique
          vitae fermentum ullamcorper mollis hendrerit praesent fames est libero
          iaculis dignissim, a himenaeos faucibus pulvinar vestibulum tempor id
          posuere dis semper purus cras, habitasse primis molestie commodo
          venenatis senectus facilisi ante sagittis integer mattis potenti.
          Blandit mi nulla in erat aenean lacus duis vestibulum sagittis
          tincidunt, inceptos mollis suscipit ante fames a id taciti rutrum.
          Montes posuere magna tellus dictum facilisi nam pretium in, tincidunt
          auctor risus ornare sollicitudin imperdiet.
        </p>
        <p>
          Purus vitae sagittis est neque lectus tortor pulvinar eu, lacinia ut
          blandit suscipit auctor praesent consequat non, ridiculus inceptos
          varius vel mi sociosqu nunc. Facilisis pretium quisque mus diam sem
          interdum rutrum leo felis, nibh imperdiet in dictumst non porttitor
          cum tortor laoreet, cras consequat malesuada taciti rhoncus orci
          auctor iaculis. Semper dis gravida turpis congue commodo faucibus
          sapien mi vehicula ridiculus porttitor, inceptos euismod penatibus
          litora viverra eu nisi erat vivamus natoque. Magnis aliquam elementum
          vehicula congue massa neque potenti, mi et tristique velit sem curae,
          sollicitudin nulla sagittis ultricies pulvinar tempor. Urna risus
          parturient felis cursus ullamcorper facilisis laoreet sed, nascetur
          ultricies aenean proin auctor montes eget cum, bibendum ante
          sollicitudin erat mi euismod suspendisse.
        </p>
        <p>
          Aenean tortor donec proin diam ligula feugiat porttitor fermentum,
          orci himenaeos volutpat commodo metus at sollicitudin nulla auctor,
          dapibus neque est dignissim gravida interdum aptent. Accumsan
          dignissim erat imperdiet felis quisque ridiculus enim mattis id aenean
          scelerisque malesuada placerat penatibus netus, leo fusce cras nulla
          maecenas potenti aptent consequat iaculis taciti nibh condimentum
          mauris. Vehicula tristique mauris vestibulum sapien id curae
          scelerisque natoque aenean, donec iaculis volutpat est torquent
          malesuada conubia rutrum eleifend, aliquam pellentesque lectus
          interdum enim dis fusce pretium.
        </p>

        {isOpen && <Modal key={Math.random()} onClose={closeModal} />}
      </div>
    </div>
  );
}

export default ModalPage;

import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import ContactUsForm from "../../components/common/ContactUsForm";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const ContactUsPage = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="お問い合わせ" />
        <Title title="お問い合わせ" />
        <div className="mt-[16px] text-[16px] leading-[21px]">
          以下のフォームに必要な項目を入力のうえ、確認をクリックしてくださいニャ
        </div>
        <div className="mt-4 text-[16px] text-[#DC0000]">＊＝必須</div>
        <div className="mt-[8px] mb-[88px]">
          <ContactUsForm />
        </div>
      </Container>
    </MainLayout>
  );
};

export default ContactUsPage;

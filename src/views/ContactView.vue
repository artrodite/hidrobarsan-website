<template>
    <div class="container mx-auto px-6 md:px-96">
        <div class="text-5xl mb-8 font-medium md:text-center" data-aos="fade-right">
            Bize Ulaşın
        </div>
        <div class="grid grid-cols-1 gap-8 px-2">
            <div class="flex items-center" data-aos="fade-right">
                <div class="bg-[#F3F3F3] h-[46px] flex items-center justify-center p-4">
                    <i class="fa fa-user"/>
                </div>
                <div class="w-full p-[3px] bg-[#F3F3F3]">
                    <input id="text"
                           v-model="name"
                           class="w-full border-none"
                           placeholder="İsim Soyisim"
                           required type="text">
                </div>
            </div>
            <div class="flex items-center" data-aos="fade-right">
                <div class="bg-[#F3F3F3] h-[46px] flex items-center justify-center p-[0.9rem]">
                    <i class="fa fa-envelope"/>
                </div>
                <div class="w-full p-[3px] bg-[F3F3F3]">
                    <input id="email"
                           v-model="email"
                           class="w-full border-none"
                           placeholder="Mail Adresiniz"
                           required type="text">
                </div>
            </div>

            <div class="flex items-center" data-aos="fade-right">
                <div class="bg-[#F3F3F3] h-[46px] flex items-center justify-center p-4">
                    <i class="fa fa-comment-dots"/>
                </div>
                <div class="w-full p-[3px] bg-[#F3F3F3]">
                    <input id="subject"
                           v-model="subject"
                           class="w-full border-none"
                           placeholder="Konu"
                           required type="text">
                </div>
            </div>

            <div class="flex items-stretch" data-aos="fade-right">
                <div class="bg-[#F3F3F3] flex justify-center p-4">
                    <i class="fa fa-pencil"/>
                </div>
                <div class="w-full p-[3px] border-[3px] border-[#F3F3F3]">
                <textarea
                        v-model="message"
                        class="w-full border-none"
                        cols="5"
                        placeholder="Mesajınız"
                        rows="5"
                />
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-4 md:items-center mt-8">
            <div class="flex items-center justify-center w-full">
                <label class="flex items-center justify-center w-full border border-[#F7AF03] cursor-pointer"
                       for="dropzone-file">
                    <div class="items-center justify-center p-2 text-[#F7AF03]">
                        <i class="fa fa-paperclip mr-2"/> Dosya Ekle
                    </div>
                    <input id="dropzone-file" class="hidden" type="file"/>
                </label>
            </div>
            <div class="mt-8 md:mt-0 md:w-1/2">
                <button class="bg-[#F7AF03] text-white border border-[#F7AF03] p-2 w-full" @click="submit">
                    Gönder <img alt="send-icon" class="hidden ml-2 align-center h-4 md:inline-flex"
                                src="@/assets/send-icon.svg">
                </button>
            </div>
        </div>

        <div class="mt-4 text-sm text-[#888888]">
            Şirketimiz ve ürünlerimiz hakkında istediğiniz bilgiyi almak için hemen bize ulaşabilirsiniz.
        </div>

        <div v-if="thankYouMessage" class="mt-4 text-sm text-[#F7AF03]">
            {{ thankYouMessage }}
        </div>

        <div class="mt-16 mb-48 text-center text-black">
            Daha Fazlası <i class="fa fa-chevron-down text-xs"/>
        </div>

        <mobile-footer-contact class="hidden md:block"/>
    </div>
</template>

<script>
import * as emailjs from "@emailjs/browser";
import MobileFooterContact from "@/components/FooterPartials/MobileFooterContact.vue";

export default {
    name: "ContactView",
    components: {MobileFooterContact},
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            thankYouMessage: ''
        }
    },
    methods: {
        async submit() {
            await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_EMAIL_TEMPLATE, {
                subject: this.subject,
                name: this.name,
                message: this.message,
            }).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.name = '';
                this.email = '';
                this.subject = '';
                this.message = '';
                this.thankYouMessage = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz.'
            }, (err) => {
                console.log('FAILED...', err);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
i:not(.fa-chevron-down, .fa-paperclip) {
  color: #A4A4A4;
  font-size: 1.2rem;
}

input, textarea {
  font-size: .875rem;

}

textarea {
  resize: none;
}


</style>

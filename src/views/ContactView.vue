<template>
    <div>
        <div class="container mx-auto px-6 md:px-96">
            <div class="text-5xl mb-8 font-medium md:text-center">
                Bize Ulaşın
            </div>
            <!--Input List-->
            <div class="grid grid-cols-1 gap-8 px-2" data-aos="fade-right">
                <div class="flex items-center">
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
                <div class="flex items-center">
                    <div class="bg-[#F3F3F3] h-[46px] flex items-center justify-center p-[0.9rem]">
                        <i class="fa fa-phone"/>
                    </div>
                    <div class="w-full p-[3px] bg-[F3F3F3]">
                        <input id="phone"
                               v-model="phoneNumber"
                               class="w-full border-none"
                               placeholder="Telefon Numaranız"
                               required type="number">
                    </div>
                </div>
                <div class="flex items-center">
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
                <div class="flex items-center">
                    <div class="bg-[#F3F3F3] h-[46px] flex items-center justify-center p-[0.9rem]">
                        <i class="fa fa-location-dot"/>
                    </div>
                    <div class="w-full p-[3px] bg-[F3F3F3]">
                        <input id="address"
                               v-model="address"
                               class="w-full border-none"
                               placeholder="Adresiniz"
                               required type="text">
                    </div>
                </div>

                <div class="flex items-center">
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

                <div class="flex items-stretch">
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

            <div class="flex flex-col md:flex-row md:gap-8 md:items-center mt-8">
                <div class="flex items-center justify-center md:w-1/3">
                    <label class="flex items-center justify-center w-full border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]"
                           for="dropzone-file">
                        <span class="items-center justify-center p-2">
                            <i class="fa fa-paperclip mr-2"/> Dosya Ekle
                        </span>
                        <input id="dropzone-file" class="hidden" type="file"/>
                    </label>
                </div>
                <div class="mt-8 md:mt-0 w-full">
                    <button class="send-button bg-[#F7AF03] text-white border border-[#F7AF03] p-2 w-full"
                            @click="submit">
                        Gönder <img alt="send-icon"
                                    class="send-icon hidden ml-2 align-center h-4 md:inline-flex transition-all"
                                    src="@/assets/send-icon.svg">
                    </button>
                </div>
            </div>

            <div class="mt-4 text-sm text-[#888888]">
                Şirketimiz ve ürünlerimiz hakkında istediğiniz bilgiyi almak için hemen bize ulaşabilirsiniz.
            </div>

            <div v-if="feedback" class="mt-4 text-sm text-[#F7AF03]">
                {{ feedback }}
            </div>

            <div class="my-28 text-center text-black ml-4">
                Daha Fazlası <i class="ml-2 fa fa-chevron-down text-xs"/>
            </div>

            <mobile-footer-contact class="hidden md:block"/>
        </div>
        <products-slider class="hidden lg:block"/>
    </div>
</template>

<script>
import * as emailjs from "@emailjs/browser";
import MobileFooterContact from "@/components/FooterPartials/MobileFooterContact.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
    name: "ContactView",
    components: {ProductsSlider, MobileFooterContact},
    data() {
        return {
            name: '',
            phoneNumber: '',
            address: '',
            email: '',
            subject: '',
            message: '',
            feedback: '',
        }
    },
    methods: {
        async submit() {
            if (this.name === '' || this.email === '' || this.subject === '' || this.message === '' || this.phoneNumber === '' || this.address === '') {
                this.feedback = 'Lütfen tüm alanları doldurunuz.';
                return;
            }
            await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_EMAIL_TEMPLATE, {
                subject: this.subject,
                name: this.name,
                message: this.message,
                phoneNumber: this.phoneNumber,
                address: this.address,
            }).then(() => {
                // console.log('SUCCESS!', response.status, response.text);
                this.name = '';
                this.email = '';
                this.subject = '';
                this.message = '';
                this.feedback = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz.'
            }, () => {
                // console.log('FAILED...', err);
                this.feedback = 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input, textarea {
  font-size: .875rem;

}

textarea {
  resize: none;
}

.send-button:hover {
  .send-icon {
    transform: translateX(10px);
  }
}


</style>

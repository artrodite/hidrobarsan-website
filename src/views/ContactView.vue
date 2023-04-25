<template>
    <div class="container mx-auto px-6 md:px-64">
        <div class="text-5xl mb-8" data-aos="fade-right">
            Bize Ulaşın
        </div>
        <div class="grid grid-cols-1 gap-8">
            <div class="flex items-center" data-aos="fade-right">
                <div class="bg-[#F3F3F3] px-8 py-4">
                    <i class="fa fa-user"/>
                </div>
                <div class="w-full p-2 bg-[#F3F3F3]">
                    <input id="text"
                           v-model="name"
                           class="w-full border-none"
                           placeholder="İsim Soyisim"
                           required type="text">
                </div>
            </div>

            <div class="flex items-center" data-aos="fade-right" data-aos-delay="100">
                <div class="bg-[#F3F3F3] px-8 py-4">
                    <i class="fa fa-envelope"/>
                </div>
                <div class="w-full p-2 bg-[#F3F3F3]">
                    <input id="email"
                           v-model="email"
                           class="w-full border-none"
                           placeholder="Mail Adresiniz"
                           required type="text">
                </div>
            </div>

            <div class="flex items-center" data-aos="fade-right" data-aos-delay="200">
                <div class="bg-[#F3F3F3] px-8 py-4">
                    <i class="fa fa-comment-dots"/>
                </div>
                <div class="w-full p-2 bg-[#F3F3F3]">
                    <input id="subject"
                           v-model="subject"
                           class="w-full border-none"
                           placeholder="Konu"
                           required type="text">
                </div>
            </div>

            <div class="flex items-stretch" data-aos="fade-right" data-aos-delay="300">
                <div class="bg-[#F3F3F3] px-8 py-4">
                    <i class="fa fa-pencil"/>
                </div>
                <div class="w-full p-2 bg-[#F3F3F3]">
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
        <div class="flex flex-col md:flex-row md:gap-4 md:items-center">
            <div class="mt-8 md:mt-0 md:w-1/2">
                <input class="w-full m-0 rounded-none text-sm text-gray-900 border border-gray-300 cursor-pointer bg-transparent"
                       type="file">
            </div>
            <div class="mt-8 md:mt-0 md:w-1/2">
                <button class="bg-[#F7AF03] text-white p-4 w-full" @click="submit">
                    Gönder
                </button>
            </div>
        </div>

        <div class="mt-4 text-sm text-[#888888]">
            Şirketimiz ve ürünlerimiz hakkında istediğiniz bilgiyi almak için hemen bize ulaşabilirsiniz.
        </div>

        <div v-if="thankYouMessage" class="mt-4 text-sm text-[#F7AF03]">
            {{ thankYouMessage }}
        </div>
    </div>
</template>

<script>
import * as emailjs from "@emailjs/browser";

export default {
    name: "ContactView",
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
i {
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

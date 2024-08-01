<script>
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    export default {
        methods: {
            showToatSuccess() {
                toast('This is a success message!', {
                    type:'success',
                    duration: 3000
                });
            }
            showToatWarning() {
                toast('This is a success message!', {
                    type:'warning',
                    duration: 3000
                });
            }
        }
        showToatInfo() {
                toast('This is a success message!', {
                    type:'info',
                    duration: 3000
                });
            }
    }
</script>
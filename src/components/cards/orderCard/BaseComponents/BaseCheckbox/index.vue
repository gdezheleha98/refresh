<template>
    <div>
        <div class="base-checkbox form-check form-check-inline col-md-12">
            <input
                    class="form-check-input"
                    type="checkbox"
                    :id="reference"
                    :checked="checked"
                    @change="$emit('change', $event.target.checked)"
                    :ref="reference"
                    :name="reference"
                    data-vv-validate-on="input"
                    v-validate="validation"
            >
            <label class="form-check-label" :for="reference">{{text}}</label>
        </div>
        <span class="error-msg">{{errors.first(reference)}}</span>
    </div>

</template>

<script>
export default {
  inject: ['$validator'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    text: String,
    reference: {
      type: String,
      required: true
    },
    checked: Boolean,
    validation: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
    .base-checkbox {
        /*padding: 0 5px;*/
        display: flex;
        align-items: flex-start;
        input {
            margin-top: 3px;
        }
        label {
            line-height: 1.1;
        }
    }
</style>

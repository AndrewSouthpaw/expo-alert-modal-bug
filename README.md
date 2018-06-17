# Modal + Alert + Expo bug

When a modal dismisses around the same time that an Alert opens, bad things happen:

1. The Alert shows briefly then disappears, and
1. Further press interactions are prohibited, as if the Alert window is still there.

This repro uses a basic starter from Expo, and uses `react-native-modal` for the modal.
